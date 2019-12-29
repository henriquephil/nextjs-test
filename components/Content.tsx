export default function Content(props: any) {
  return (
    <div className="Content">
      <div className="Content--container page-width">
          {props.children}
      </div>
        <style jsx>{`
        .Content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #e1e1e1;
          color: #222;
          box-shadow: 0 0 4px black inset;
          padding: 8px 0;
        }
        .Content--container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        `}</style>
    </div>
  );
}