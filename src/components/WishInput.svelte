<script>
  import { wishes } from "./stores.js";
  let wish = "";

  const addWish = (event) => {
    event.preventDefault();
    if (wish !== "") {
      const generateId = () => Math.floor(Math.random() * 999999999 + 1);

      wishes.update((list) => [...list, { title: wish, id: generateId() }]);
      wish = "";
    }
  };

  $: localStorage.setItem("wishlist", JSON.stringify($wishes));
</script>

<div class="wishinput_container">
  <form>
    <input
      maxlength="20"
      placeholder="Add your wish..."
      bind:value={wish}
      class="wishinput_input"
      type="text"
    />
    <button
      type="submit"
      on:click={addWish}
      class={`wishinput_button ${wish !== "" && "wishinput_button_active"} `}
      >ADD</button
    >
  </form>
</div>

<style type="text/scss">
  .wishinput {
    &_container {
      display: flex;
      justify-content: center;
    }

    &_input {
      background-color: #c7d8ec;
      border-bottom-left-radius: 50px;
      border-top-left-radius: 50px;
      padding-left: 8px;
      padding-right: 8px;
      border: none;
      color: rgb(49, 49, 49);
      height: 30px;
      width: 190px;
      transition: background-color 200ms;
      &::placeholder {
        color: #95a4b6;
      }

      &:focus,
      &:hover {
        background-color: #b8d0ec;
        transition: background-color 200ms;
      }
    }

    &_button {
      background-color: #c7d8ec;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      font-weight: 500;
      font-size: 16px;
      color: #c7d8ec;
      height: 30px;
      border: none;
      transition: color 200ms, background-color 200ms;
      padding-right: 8px;

      &_active {
        background-color: #ff008e;
        color: white;

        &:hover {
          background-color: #df007a;
          transition: color 200ms, background-color 200ms;
        }
      }
    }
  }
</style>
