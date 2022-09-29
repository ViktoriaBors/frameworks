<template>
<div>
  <form>
    <label>E-mail</label>
    <input type="email" required v-model="email">
    <label>Password</label>
    <input type="password" required v-model="password">
    <label>Role</label>
    <select v-model="role">
        <option value="developer">Webdeveloper</option>
        <option value="desginer">Webdesigner</option>
    </select>
    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label> Accept terms and conditions</label>
    </div>
    <div>
        <input type="checkbox" value="Shaun" v-model="names">
        <label>Shaun</label>
    </div>
        <div>
        <input type="checkbox" value="Yoshi" v-model="names">
        <label>Yoshi</label>
    </div>
        <div>
        <input type="checkbox" value="Mario" v-model="names">
        <label>Mario</label>
    </div>
  </form>
    <p>{{email}}</p>
    <p> {{password}}</p>
    <p>{{role}}</p>
    <p>{{terms}}</p>
    <p>{{names}}</p>
</div>
</template>

<script>
export default {
    data(){
        return {
            email: "",
            password:"",
            role:"",
            terms: false,
            names: []
        }
    }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
    input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
    input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
</style>