/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <h5 class="card-title">Bem-vindo ao Diagnóstico Diferencial do Blackbook.</h5>
      <div class="card-text">
        <p>
          Clique em 
          <span class="badge badge-primary">Próximo</span> 
          para iniciar.
        </p>
      </div>
    `);
  });
};

export default template;
