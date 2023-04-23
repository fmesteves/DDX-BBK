/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
      <h5 class="card-title">Onde você vive ou viajou recentemente?</h5>
      <div class="card-text">
        <form>
          ${riskHtmlMapper(risks, context.locationRiskFactors)}
        </form>
      </div>
    `;
  });
};

export default template;
