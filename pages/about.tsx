import Layout from '../components/Layout';
import Link from 'next/link';
import TitledPage from '../components/pages/TitledPage';
import GenericPageableList from '../components/pages/GenericPageableList';

export default function About(props: any) {
  // const edit = edit.bind(this);
  const edit = (compra: Compra) => {
    props.history.push(`/compras/compra/${compra.id}`)
  }
  const service = new DefaultCrudService('/compra');
  const columns = [
      {
          key: 'documento',
          descricao: 'Documento',
          align: 'left'
      },
      {
          key: 'fornecedor.nome',
          descricao: 'Fornecedor',
          align: 'left',
          resolve: compra => {
              switch (compra.fornecedor.tipoPessoa) {
                  case 'FISICA': return compra.fornecedor.dadosPessoa.nome;
                  case 'JURIDICA': return compra.fornecedor.dadosPessoa.nomeFantasia;
                  default: return '';
              } 
          }
      }
  ];

  const recordActions = [
      {
          srcImg: pencil,
          alt: 'Editar',
          onClick: this.edit
      }
  ]
  return (
    <Layout>
      <TitledPage title="About">
          <GenericPageableList service={service} recordActions={recordActions} columns={columns}>
              <Link to="/compras/compra" className="default primary">Novo</Link>
          </GenericPageableList>
      </TitledPage>
    </Layout>
  );
}