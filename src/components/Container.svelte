<script>
  import Header from "./Header.svelte";
  import ShareButton from "./ShareButton.svelte";
  import WishInput from "./WishInput.svelte";
  import WishList from "./WishList.svelte";
</script>

<div class="container">
  <Header />
  <WishInput />
  <WishList />
  <ShareButton />
</div>

<style>
  .container {
    background-color: #daeaf6;
    width: 276px;
    height: 376px;
    border-radius: 8px;
    box-shadow: 0px 8px 13px 2px rgba(0, 0, 0, 0.39);
    transform: translateY(50%);
    padding: 24px;
  }
</style>
