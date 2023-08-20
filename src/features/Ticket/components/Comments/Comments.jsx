const Comments = () => {
  return (
    <div className="bg-white py-8 border-t-2 border-t-gray-100 shadow-md ">
      <h2 className="text-2xl px-5 font-medium mb-8">Comments</h2>
      <div className="chat chat-start  px-6">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
          </div>
        </div>
        <div className="chat-header ">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50 ml-1">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
      </div>
    </div>
  );
};
export default Comments;
