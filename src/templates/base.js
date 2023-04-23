/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

const template = `
  <div class="card">
      <header class="card-header">
          <img id="logo" src="/public/logo.png"></img>
      </header>
      <main id="step-container" class="card-block">
        <!-- dynamic content goes here -->
      </main>
      <footer class="card-footer">
          <button id="next-step" class="btn btn-primary float-right">Próximo
          <i class="fa fa-chevron-right"></i></button>
      </footer>
  </div>
`;

export default template;
