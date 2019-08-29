<script>
    export let displayName
    export let photoURL
    export let email
    export let uid
</script>

<style>
  h3, p {
    font-family: sans-serif
  }
</style>

<h3>Hi { displayName }!</h3>

<img src={ photoURL } width="100" alt="user avatar">
<p>Your email is { email }</p>
<p>Your userID is { uid }</p>