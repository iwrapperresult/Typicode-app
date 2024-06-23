import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AppDispatch, RootState } from '../common/store';
import { selectPlugins } from '../common/slice';
import { createPlugin, findPluginById, updatePlugin } from '../common/action';
import { InputField } from '../components/input';
import { Button } from '../components/button';

interface PluginFormProps {
    title: string;
  pluginId?: string | null;
  onClose: () => void;
}

interface PluginFormValues {
    name: string;
    description: string;
    image: string;
    link: string;
  }

const PluginForm: React.FC<PluginFormProps> = ({ pluginId , title, onClose}) => {
  const dispatch: AppDispatch = useDispatch();
  const plugins = useSelector((state: RootState) => selectPlugins(state));
  const [formValues, setFormValues] = useState<PluginFormValues>({
    name: '',
    description: '',
    image: '',
    link: ''
  });
  
  useEffect(() => {
    if (pluginId) {
      const plugin = plugins[pluginId];
      if (plugin) {
        setFormValues({
            name: plugin.name || '',
            description: plugin.description || '',
            image: plugin.image || '',
            link: plugin.link || '',
          });
      } else {
        dispatch(findPluginById(pluginId));
      }
      onClose();
    }
  }, [dispatch, pluginId, plugins]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pluginId) {
      await dispatch(updatePlugin({ id: pluginId, ...formValues }));
    } else {
        const newPlugin = {
            id: uuidv4(),
            ...formValues
          };
          await dispatch(createPlugin(newPlugin));
    }
    onClose();
  };

  const buttons = [
    { text: "Cancel", variant: "secondary" as const , handle: onClose},
    { text: "Push", variant: "primary" as const , handle: handleSubmit},
  ];

  return (
    <main className="flex flex-col justify-center bg-white">
        <div className="flex flex-col items-center max-w-full  max-md:mt-10">
        <div className="justify-center px-8 py-4 rounded-md max-md:px-5 text-2xl">
            {title}
        </div>
          <InputField label="Name" placeholder="name" type="text" name={"name"} value={formValues?.name} onChange={handleChange} />
          <InputField label="Image url" placeholder="chose file" type="text" name={"image"} value={formValues?.image} onChange={handleChange} />
          <InputField label="Link" placeholder="link where the plugin is exposed" type="url" name={"link"} value={formValues?.link} onChange={handleChange} />
          <label htmlFor="description" className="self-center mt-7 text-base tracking-wider leading-6 text-stone-300">Description</label>
            <textarea
                name="description"
                id="description"
                value={formValues.description}
                onChange={handleChange}
                className="justify-center items-start px-4 py-5 mt-3 max-w-full text-lg tracking-wider leading-6 whitespace-nowrap bg-white rounded-xl border border-solid shadow-lg border-neutral-200 text-stone-500 w-[318px] max-md:pr-5"
            />
          <div className="flex flex-row py-4 mt-4 justify-center space-x-8 w-full">
          {buttons.map((button, index) => (
                  <Button key={index} text={button.text} variant={button.variant} handle={button.handle}  />
              ))}

          </div>
        </div>
    </main>
  );
};

export default PluginForm;
