import Paper from "./Paper";

export default function TitledPage(props: any) {
  
  return (
    <div className="TitledPage">
        <div className="TitledPage--title">
            {props.title}
        </div>
        <Paper>
            {props.children}
        </Paper>
        <style jsx>{`
        .TitledPage {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .TitledPage--title {
            font-size: 20pt;
            color: #737373;
            letter-spacing: 1px;
            margin-left: 40px;
            margin-bottom: -6px;
            z-index: 100;
            text-shadow: 0 0 2px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        `}</style>
    </div>
);
}