const NewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          padding: "20px",
          boxSizing: "border-box",
          border: "1px solid",
        }}
      >
        <p>
          Layout for <strong>News</strong> page
        </p>
      </div>
      {children}
    </section>
  );
};

export default NewLayout;
