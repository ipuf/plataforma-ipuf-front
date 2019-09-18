<script>
  import Select from '../inputs/Select.svelte'
  import Text from '../inputs/Text.svelte'
  import { rep, gerais } from '../../utils/arrays.js'
  import { saveData } from '../../utils/firebase.js'

  export let coords = ''
  
  let distSelected
  let catSelected
  let tipoSelected
  let idrep = ''
  let nome = ''

</script>

<style>
  form {
    padding-top: 3%;
    font-family: sans-serif;
  }
  input[type=text] {
    position: relative;
    width: 90%;
    padding: 12px;
    margin-bottom: 2vh;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  input[type=radio] {
    margin-bottom: 2vh;
  }
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    width: 8vw;
    height: 4vh;
    padding: 0;
    margin: 10px 0px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type=submit]:hover {
    background-color: #45a049;
  }
  input::placeholder {
    color: rgb(150, 150, 150);
  }
</style>

<div class="leaflet-sidebar-pane" id="formrep">
  <h1 class="leaflet-sidebar-header">
    Form REP
    <span class="leaflet-sidebar-close"><i class="fa fa-caret-left"></i></span>
  </h1>

  <form>
    <Text bind:value={idrep} placeholder="Ex.: 1CAM" label="idREP"/>
    <Text bind:value={nome} placeholder="Ex.: Praça XV de Novembro" label="Nome"/>
    <Select categoria={gerais.distritos} bind:selected={distSelected} placeholder="Nome do distrito"/>
    <Select categoria={rep.categorias} bind:selected={catSelected} placeholder="Categoria do Espaço Público"/>
    <Select categoria={rep.subcategorias} bind:selected={tipoSelected} placeholder="Tipo de Espaço Público"/>

    <label for="sub_categoria">Sub categoria</label><br />
    <input id="sub_categoria" type="text" name="sub_categoria" placeholder="Subcategoria (text)"
      required="required" /><br />

    <label for="insc_imob">Inscrição Imobiliária</label><br />
    <input id="insc_imob" type="text" name="insc_imob" placeholder="Inscrição Imobiliária (inteiro)" /><br />

    <label for="zoneamento">Zoneamento</label><br />
    <input id="zoneamento" type="text" name="zoneamento" placeholder="Zoneamento (text)" /><br />

    <label for="area">Área Total</label><br />
    <input id="area" type="text" name="area" placeholder="Área (inteiro)" required="required" /><br />

    <label for="origem">Origem</label><br />
    <input id="origem" type="text" name="origem" placeholder="Origem (text)" /><br />

    <label for="ultima_manutencao">Última Manutenção</label><br />
    <input id="ultima_manutencao" type="text" name="ultima_manutencao"
      placeholder="Data da Última Manutenção (ex: 2019-06-24)" /><br />

    <label for="situacao_adocao">Adotada?</label><br />
    <input id="situacao_adocao" type="radio" name="situacao_adocao" value="TRUE" required="required" />Sim
    <input id="situacao_adocao" type="radio" name="situacao_adocao" value="FALSE" required="required" />Não<br />

    <label for="praca_viva">Praça Viva?</label><br />
    <input id="praca_viva" type="radio" name="praca_viva" value="TRUE" required="required" />Sim
    <input id="praca_viva" type="radio" name="praca_viva" value="FALSE" required="required" />Não<br />

    <label for="postes">Postes</label><br />
    <input id="postes" type="text" name="postes" placeholder="Postes (inteiro)" /><br />

    <label for="lixeiras">Lixeiras</label><br />
    <input id="lixeiras" type="text" name="lixeiras" placeholder="Lixeiras (inteiro)" /><br />

    <label for="paraciclos">Paraciclos</label><br />
    <input id="paraciclos" type="text" name="paraciclos" placeholder="Paraciclos (inteiro)" /><br />

    <label for="mesas">Mesas</label><br />
    <input id="mesas" type="text" name="mesas" placeholder="Mesas (inteiro)" /><br />

    <label for="bancos">Bancos</label><br />
    <input id="bancos" type="text" name="bancos" placeholder="Bancos (inteiro)" /><br />

    <label for="academia">Academia</label><br />
    <input id="academia" type="radio" name="academia" value="TRUE" />Sim
    <input id="academia" type="radio" name="academia" value="FALSE" />Não<br />

    <label for="estacao_alongamento">Estação de Alongamento</label><br />
    <input id="estacao_alongamento" type="radio" name="estacao_alongamento" value="TRUE" />Sim
    <input id="estacao_alongamento" type="radio" name="estacao_alongamento" value="FALSE" />Não<br />

    <label for="pista_skate">Pista de Skate</label><br />
    <input id="pista_skate" type="radio" name="pista_skate" value="TRUE" />Sim
    <input id="pista_skate" type="radio" name="pista_skate" value="FALSE" />Não<br />

    <label for="pista_corrida">Pista de Corrida</label><br />
    <input id="pista_corrida" type="radio" name="pista_corrida" value="TRUE" />Sim
    <input id="pista_corrida" type="radio" name="pista_corrida" value="FALSE" />Não<br />

    <label for="quadra_areia">Quadra de Areia</label><br />
    <input id="quadra_areia" type="radio" name="quadra_areia" value="TRUE" />Sim
    <input id="quadra_areia" type="radio" name="quadra_areia" value="FALSE" />Não<br />

    <label for="quadra_poli">Quadra Poliesportiva</label><br />
    <input id="quadra_poli" type="radio" name="quadra_poli" value="TRUE" />Sim
    <input id="quadra_poli" type="radio" name="quadra_poli" value="FALSE" />Não<br />

    <label for="campo_futebol">Campo de Futebol</label><br />
    <input id="campo_futebol" type="radio" name="campo_futebol" value="TRUE" />Sim
    <input id="campo_futebol" type="radio" name="campo_futebol" value="FALSE" />Não<br />

    <label for="pet_place">Pet place</label><br />
    <input id="pet_place" type="radio" name="pet_place" value="TRUE" />Sim
    <input id="pet_place" type="radio" name="pet_place" value="FALSE" />Não<br />

    <label for="parque_infantil">Parque Infantil</label><br />
    <input id="parque_infantil" type="radio" name="parque_infantil" value="TRUE" />Sim
    <input id="parque_infantil" type="radio" name="parque_infantil" value="FALSE" />Não<br />

    <label for="horta">Horta</label><br />
    <input id="horta" type="radio" name="horta" value="TRUE" />Sim
    <input id="horta" type="radio" name="horta" value="FALSE" />Não<br />

    <label for="lat_y">Latitude</label><br />
    <input id="lat_y" type="text" name="lat_y" placeholder="Latitude (ex: -27.5969)" required="required" /><br />

    <label for="long_x">Longitude</label><br />
    <input id="long_x" type="text" name="long_x" placeholder="Longitude (ex: -48.5495)" required="required" /><br />

    <input type="submit" value="Enviar" />
  </form>
</div>