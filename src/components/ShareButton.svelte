<script>
  import { wishes } from "./stores.js";

  const shareWishlist = () => {
    const generateText = () => {
      let sharableText = "";
      if ($wishes.length === 1) {
        sharableText = `- ${$wishes[0].title}`;
      } else {
        sharableText = $wishes.reduce(
          (prevValue, currValue) =>
            (prevValue.title ? "- " : "") +
            (prevValue.title || prevValue) +
            "\n- " +
            currValue.title
        );
      }

      return `\nThis is my wish list! ☺️\n ${sharableText}\n Buy me all of it, please 🥺 💕`;
    };

    navigator.clipboard.writeText(generateText()).then(
      function () {
        alert(
          "Your wishlist was added to clipboard! Paste it and send somedoby!"
        );
      },
      function () {
        alert("Kosyak happend...");
      }
    );
  };
</script>

<div class="sharebutton_container">
  <button
    class={`sharebutton_button ${
      $wishes.length !== 0 && "sharebutton_button_active"
    }`}
    on:click={shareWishlist}>Share</button
  >
</div>

<style type="scss">
  .sharebutton {
    &_container {
      display: flex;
      justify-content: center;
    }

    &_button {
      width: 235px;
      border-radius: 50px;
      border: none;
      background-color: #c7d8ec;
      text-transform: uppercase;
      color: #95a4b6;
      height: 30px;
      transition: background-color 200ms, color 200ms;
      font-weight: 600;

      &_active {
        background-color: #ff008e;
        transition: background-color 200ms;
        color: white;
        transition: background-color 200ms, color 200ms;

        &:hover {
          background-color: #df007a;
          transition: background-color 200ms;
        }
      }
    }
  }
</style>
