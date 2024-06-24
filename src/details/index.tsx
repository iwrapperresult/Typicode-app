import { useNavigate, useParams } from "react-router-dom";
import { ChevronBackIcon, DeleteIcon, PencilIcon } from "../asset";
import { AppDispatch, RootState } from "../common/store";
import { useDispatch, useSelector } from "react-redux";
import { selectPluginById } from "../plugin/common/slice";
import { deletePlugin, findPluginById } from "../plugin/common/action";
import { useEffect, useState } from "react";
import Modal from "../components/modal";
import PluginForm from "../plugin/form";
import { selectLoggedInUser, selectUsers } from "../user/common/slice";
import ConfirmDeleteModal from "./sure";
import EditionPluginForm from "../plugin/form/edit";

export const PluginDetails = () => {
    let { id } : any= useParams();
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const plugin = useSelector((state: RootState) => selectPluginById(state, id));
    const loggedInUser = useSelector(selectLoggedInUser);
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const [showForm, setShowForm] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);


    useEffect(() => {
        if (id) {
          dispatch(findPluginById(id));
        }
      }, [dispatch, id]);

    const handleBack = () => {
        navigate(-1);
      };

      if (!plugin) {
        return <div>Loading...</div>;
      }

      const handleDeletePlugin = () => {
        dispatch(deletePlugin(id));
        setShowDeleteModal(false);
        navigate(-1);
      };

      const handleEditPlugin = () => {
        setShowForm(true);
      };

      const canEditOrDelete = loggedInUser && loggedInUser.email === user?.email;


    return (
        <>
      <div className="w-full flex flex-col justify-center items-center gap-5 px-3 pt-[2rem] font-apple-system">
        <div className="flex flex-row justify-between items-start w-full">
          <button onClick={handleBack}>
            <ChevronBackIcon width={"31"} height={"31"} color={"#701A75"} />
          </button>
        </div>
        <article className="flex gap-2 mt-12 max-md:flex-wrap max-md:mt-10 h-full">
    <div className="flex justify-center items-center backdrop-blur-[6.827586650848389px]">
      <img loading="lazy" src={plugin.image} alt={plugin.name} className="aspect-[1.67] w-[166px]" />
    </div>
    <div className="flex flex-col flex-1">
      <div className="flex gap-4 justify-between items-start px-5 py-0.5">
        <h3 className="text-base font-bold leading-8 text-gray-500">
          <span className="text-sky-950">{plugin.name}</span>
          <span className="text-gray-500"> {plugin.description}</span>
        </h3>
        { canEditOrDelete &&(
        <div className="flex flex-col justify-center">
        <button onClick={handleEditPlugin} className="flex justify-center items-center p-1 rounded-lg">
          <PencilIcon width={"48"} height={"48"} color={"#701a75"}/>
          </button>
          <button onClick={() => setShowDeleteModal(true)} className="flex justify-center items-center p-1 rounded-lg">
          <DeleteIcon width={"21"} height={"21"} color={"red"} />
          </button>
        </div>
        )}
      </div>
      <div className="justify-center px-5 mt-2 text-xl tracking-tight leading-6 text-teal-700">
        
      <a href={`https://${plugin?.link}`} target="_blank" rel="noopener noreferrer">
                view in store
                </a>
      </div>
    </div>
  </article>
        
      </div>

       {/* <Modal show={showForm} onClose={() => setShowForm(false)}>  */}
        <EditionPluginForm title="To Edit the plugin" pluginId={id} onClose={() => setShowForm(false)} showModal={showForm} />
       {/* </Modal>  */}
      <ConfirmDeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeletePlugin}
        pluginName={plugin.name}
      />
    </>
    )
}