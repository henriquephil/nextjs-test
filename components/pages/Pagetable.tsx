import Page from "../../model/Page";

interface Props<T> {
  children: any;
  page: Page<T>;
  controls: {
    previousPage: () => void,
    nextPage: () => void
  };
  actions: Array<any>
}

export default function Pagetable<T>(props: Props<T>) {

  const bodyHeight = props.page.size * 32 + 2;

  const renderNoData = () => {
    return <tr><td colSpan={props.children.length} style={{textAlign: 'center'}}>Loading</td></tr>;
  }

  const tdStyle = (thStyle: any) => {
    return {...thStyle, ...{textAlign: thStyle.align}};
  }

  const renderRow = (record: T, rowIndex: number, children: Array<any>) => {
    const row = children.map((header: any, index) => <td key={index} style={tdStyle(header.props)}>{header.props.resolve(record)}</td>);

    const actions = <td className="Pagetable--tableActions">{props.actions.map((action, index) => <img key={index} src={action.srcImg} alt={action.alt} onClick={() => action.onClick(record)}></img>)}</td>;
    return <tr key={rowIndex}>{row}{actions}</tr>;
  }

  const renderBody = (page: Page<T>) => {
    if(!page || !page.content) {
        return renderNoData();
    }
    const dataRows = page.content.map((record, index) => renderRow(record, index, props.children));
    const emptyRows = [...Array(props.page.size - page.content.length)].map((val, index) => <tr key={index} className="Pagetable--empty-row"><td colSpan={props.children.length}></td></tr>);
    return [dataRows, emptyRows];
  }

  return (
      <div className="Pagetable">
          <table>
              <thead>
                  <tr>
                      {props.children}
                  </tr>
              </thead>
              <tbody style={{height: bodyHeight}}>
                  {renderBody(props.page)}
              </tbody>
              <tfoot>
                  <tr>
                      <td colSpan={props.children.length}>
                          <div className="Pagetable--footer">
                              <input type="button" value="Página anterior" onClick={props.controls.previousPage}/>
                              <input type="button" value="Próxima página" onClick={props.controls.nextPage}/>
                          </div>
                      </td>
                  </tr>
              </tfoot>
          </table>
          <style jsx>{`
          .Pagetable {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          
          .Pagetable--tableActions {
              position: fixed;
              line-height: 30px;
              margin: auto;
              display: flex;
              flex-direction: row-reverse;
              transform: translateX(-100%);
          }
          .Pagetable--tableActions > * {
              height: 18px;
              margin: 6px;
              cursor: pointer;
              opacity: 0;
              transition: 0.2s;
          }
          .Pagetable table > tbody > tr:hover > .Pagetable--tableActions > * {
              opacity: 0.4;
          }
          .Pagetable table > tbody > tr:hover > .Pagetable--tableActions > *:hover {
              opacity: 0.8;
          }
          .Pagetable th, .Pagetable td {
              padding-left: 8px;
              padding-right: 8px;
          }
          .Pagetable--empty-row, .Pagetable--empty-row:hover {
              color: transparent;
              background-color: transparent;
              border-color: transparent;
          }
          
          .Pagetable--footer {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              height: 50px;
          }
          .Pagetable--footer input[type=button] {
              height: 100%;
              background: transparent;
              border: 1px solid #e6e6e6;
              color: #666;
              text-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
              transition: 0.3s;
              cursor: pointer;
          }
          .Pagetable--footer input[type=button]:hover {
              background: white;
              color: #333;
              border-color: #d6d6d6;
          }
          .Pagetable--footer input[type=button]:first-child {
              border-width: 0 1px 0 0;
          }
          .Pagetable--footer input[type=button]:last-child {
              border-width: 0 0 0 1px;
          }
          `}</style>
      </div>
    );
}