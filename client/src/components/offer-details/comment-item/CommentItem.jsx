export default function CommentItem({
  content,
  username,
  userId,
  _ownerId,
  deleteCommentHandler,
  _id,
}) {
  const isOwner = userId === _ownerId;

  const deleteCommentOnClick = () => {
    deleteCommentHandler(_id);
  };

  return (
    <>
      <div className="comment">
        <strong>{username}</strong> {content}
        {isOwner && <button onClick={deleteCommentOnClick}>Delete</button>}
      </div>
    </>
  );
}
