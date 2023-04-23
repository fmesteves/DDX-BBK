/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';

const template = (context) => {
  return new Promise((resolve) => {
    resolve(html`
      <h5 class="card-title">Descreva como se sente (ou como o paciente se sente).</h5>
      <div class="card-text">
        <form>
          <div class="form-group">
            <label for="input-feel">
              Tentaremos reconhecer seus sintomas usando algoritmos de processamento de linguagem natural (PLN).
            </label>
            <textarea placeholder="e.g. I got headache" class="form-control" id="input-feel" rows="4"></textarea>
          </div>
        </form>
        <p>Observações identificadas:</p>
        <ul class="list-unstyled" id="observations">
        </ul>
        <p class="text-muted small">
          <i class="fa fa-exclamation-circle"></i>
          Note que você só poderá avançar para a próxima etapa <span class="badge badge-primary">Próximo</span> 
          se pelo menos uma observação <span class="text-success">presente <i class="fa fa-plus-circle"></i></span>
          for identificada.
        </p>
      </div>
    `);
  });
};

export default template;
