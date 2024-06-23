import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './common/store';
import { selectError, selectLoading, selectPlugins } from './common/slice';
import { deletePlugin, foundPlugin } from './common/action';
import { Card } from './components/card';


const PluginList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const plugins = useSelector((state: RootState) => selectPlugins(state));
  const loading = useSelector((state: RootState) => selectLoading(state));
  const error = useSelector((state: RootState) => selectError(state));
  const [editingPluginId, setEditingPluginId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(foundPlugin());
  }, [dispatch]);



  return (
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Plugin List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <section className="flex flex-wrap gap-4 items-center justify-center pt-4">
      {Object.values(plugins).map((plugin, index) => (
        <Card imageSrc={plugin.image} title={plugin.name}  link={''} key={plugin.id} {...plugin} />
      ))}
    </section> 
    </div>
  );
};

export default PluginList;
