export default function Paper(props: any) {
  return (
    <div className="Paper">
        {props.children}
    <style jsx>{`
    .Paper {
      width: 100%;
      background-color: #fafafa;
      border-radius: 1px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 4px 2px rgba(0, 0, 0, 0.1)
    }
    `}</style>
      </div>
  );
}