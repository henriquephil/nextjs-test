import Header from './Header'
import Meta from './meta'
import Content from './Content'
import Footer from './Footer'

export default function Layout(props: any) {
  return (
    <div className="Layout">
      <Meta />
      <Header/>
      <Content>
        {props.children}
      </Content>
      <Footer/>
      <style jsx>{`
      .Layout {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }    
      `}</style>
    </div>
  )
}