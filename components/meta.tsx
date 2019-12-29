import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        font-family: "Ubuntu", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      body {
        margin: 0;
        padding: 0;
        background: #333333;
      }

      .page-width {
        width: 1200px;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
      }
      
      .full-width {
        width: 100%;
      }
    

      input.subtle {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        padding: 8px;
        font-size: 1.1rem;
        color: #777;
      }
      
      .form-input {
          padding: 4px;
      }
      .form-input label {
          color: #777;
          font-weight: 600;
          font-size: 0.8rem;
          padding: 0 0 0 8px;
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
      }
      .form-input input, select {
          color: #444;
          background: #e8e8e8;
          border: none;
          border-radius: 2px;
          padding: 8px;
          width: 100%;
      }
      .form-input select {
          padding: 7px;
      }
      .form-input input:focus {
          box-shadow: 0 0 1px 1px rgba(200, 20, 0, 0.2) inset;
      }
      .form-input input:read-only {
          color: #666;
      }
    `}</style>
  </div>
)