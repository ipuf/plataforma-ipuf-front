<script>
    export let displayName
    export let photoURL
    export let email
    export let uid
</script>

<style>
  .parent {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 2fr;
  }
  h3, p {
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
  }
  h3 {
    font-size: 0.9rem;
  }
  p {
    font-size: 0.8rem;
  }
</style>

<h3>Olá { displayName }!</h3>
<div class="parent">
  <img src={ photoURL } width="100" alt="user avatar">
  <section>
    <p>Seu email é:</p>
    <p>{ email }</p>
    <p>Seu userID é:</p>
    <p>{ uid }</p>
  </section>
</div>
