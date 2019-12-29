import { useState } from "react";
import Page from '../../model/Page'
import Pagetable from "./Pagetable";

export default function GenericPageableList<T>(props: any) {
  const [page, setPage] = useState(new Page());
  const [search, setSearch] = useState('');

  const service = props.service;

  const componentDidMount = () => {
      fetchPage(20, 0);
  }

  const previousPage = () => {
      fetchPage(20, Math.max(0, page.index - 1));
  }

  const nextPage = () => {
      fetchPage(20, page.index + 1);
  }

  const fetchPage = (size: number, page: number) => {
      setPage(new Page());
      props.service.fetchPage(size, page).then((res: {data: Page<T>}) => {
          setPage(res.data);
      });
  }

  return (
      <div className="GenericPageableList">
          <div className="GenericPageableList--table">
              <Pagetable page={page} actions={props.recordActions} controls={{previousPage, nextPage}}>
                  {props.columns.map((th: any) =>
                      <th key={th.key} style={{width: th.width}} align={th.align} resolve={th.resolve}>{th.descricao}</th>
                  )}
              </Pagetable>
          </div>
          <div className="GenericPageableList--side">
              <div className="GenericPageableList--search">
                  <input type="text" className="subtle" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busca"/>
              </div>
              {props.children}
          </div>
          <style jsx>{`
          .GenericPageableList {
            width: 100%;
            display: flex;
            flex-direction: row;
          }
          .GenericPageableList--table {
              width: 900px;
              border-right: 1px solid #dfdfdf;
          }
          .GenericPageableList--side {
              width: 300px;
              display: flex;
              flex-direction: column;
              align-content: flex-end;
          }
          .GenericPageableList--search {
              height: 48px;
              border-bottom: 2px solid #dfdfdf;
          }
          `}</style>
      </div>
  );
}