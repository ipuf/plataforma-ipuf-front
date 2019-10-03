<script>
    export let displayName
    export let photoURL
    export let email
    export let uid

    console.log(uid)
</script>

<style>
  h3, p {
    font-family: sans-serif
  }
</style>

<h3>Olá, { displayName }!</h3>

<img src={ photoURL } width="100" alt="user avatar">
<p>Seu email é: { email }</p>
