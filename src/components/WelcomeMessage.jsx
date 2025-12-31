function WelcomeMessage({ children }) {
  return (
    <div className="message">
      <h1>Welcome to Second Steps 🤩 </h1>
      {children}
    </div>
  );
}

export default WelcomeMessage;
