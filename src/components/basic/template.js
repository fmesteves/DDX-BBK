/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
        <h5 class="card-title">Qual o seu sexo e idade?</h5>
        <div class="card-text">
          <form>
            <div class="form-group row">
              <label for="input-sex" class="col-sm-2 col-form-label">Sexo</label>
              <div class="col-sm-10">      
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sex-radio-inline-1" 
                    name="sex-radio-inline" class="input-sex custom-control-input" value="male" checked>
                  <label class="custom-control-label" for="sex-radio-inline-1">
                    <i class="fa fa-fw fa-male"></i> Masculino
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sex-radio-inline-2" 
                    name="sex-radio-inline" class="input-sex custom-control-input" value="female">
                  <label class="custom-control-label" for="sex-radio-inline-2">
                    <i class="fa fa-fw fa-female"></i> Feminino
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="input-age" class="col-sm-2 col-form-label">Idade</label>
              <div class="col-sm-2">
                <input type="number" class="form-control" id="input-age" value="30">
              </div>
            </div>
            <p id="age-validation" class="col-sm-6 alert alert-danger" hidden="true">
              Please enter an age in the range 0-130.
            </p>
          </form>
        </div>
      `);
  });
};

export default template;
