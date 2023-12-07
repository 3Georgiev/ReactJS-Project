export default function CommentItem({ content, username }) {
  return (
    <>
      <div className="comment">
        <strong>{username}</strong> {content}
        <button>Delete</button>
      </div>
    </>
  );
}
