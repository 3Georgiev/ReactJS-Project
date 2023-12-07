export default function CommentItem({ content, username, userId, _ownerId }) {
  const isOwner = userId === _ownerId;
  return (
    <>
      <div className="comment">
        <strong>{username}</strong> {content}
        {isOwner && <button>Delete</button>}
      </div>
    </>
  );
}
