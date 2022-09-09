import axios from "axios";

const LinkCard = ({ link, refreshLinks }) => {
  const handleArchive = async () => {
    link.archived = true;
    try {
      const res = await axios.put("/.netlify/functions/updateLink", link);
      console.log("res :>> ", res);
      refreshLinks();
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleDelete = async () => {
    const id = link._id;
    try {
      const res = await axios.delete("/.netlify/functions/deleteLink", {
        data: { id },
      });
      console.log("res :>> ", res);
      refreshLinks();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5 className="card-title">{link.name}</h5>
      </div>
      <div className="card-body">
        <a href={link.url}>{link.url}</a>
        <p className="card-text">{link.description}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleArchive} className="btn btn-warning mr-2">
          Archive
        </button>
        <button onClick={handleDelete} className="btn btn-danger ml-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
