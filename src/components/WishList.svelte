<script>
  import { wishes } from "./stores.js";

  const deleteWish = (id) => {
    wishes.update((list) => [...list.filter((item) => item.id !== id)]);
  };
</script>

<div class="wishlist_container">
  <ul class="wishlist_list">
    {#each $wishes as wish (wish.id)}
      <li class="wishlist_item">
        <span>{wish.title}</span>
        <button on:click={() => deleteWish(wish.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 0 48 48"
            width="48"
            ><path
              d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z"
            /><path d="M0 0h48v48h-48z" fill="none" /></svg
          >
        </button>
      </li>
    {:else}
      <p class="wishlist_empty">No wishes yet</p>
    {/each}
  </ul>
</div>

<style type="scss">
  .wishlist {
    &_container {
      display: flex;
      justify-content: center;
      padding-bottom: 4px;
    }

    &_list {
      list-style: none;
      padding-left: 0;
      overflow-y: scroll;
      height: 218px;
      width: 100%;
    }

    &_item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 30px;
      border-radius: 50px;
      transition: background-color 200ms;

      span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: rgb(49, 49, 49);
        font-size: 16px;
        line-height: 24px;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 10px;
        font-weight: 400;
      }

      button {
        background-color: transparent;
        border: none;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 3px;
        padding-right: 0;
        margin: 0;
        cursor: pointer;

        svg {
          padding-right: 8px;
          height: 24px;
          width: 24px;
          fill: transparent;
          transition: fill 200ms;
        }
      }

      &:hover {
        background-color: #b8d0ec;
        transition: background-color 200ms;

        button {
          svg {
            fill: #ff008e;
            transition: fill 200ms;
          }

          &:hover {
            svg {
              fill: #df007a;
              transition: fill 200ms;
            }
          }
        }
      }
    }
    &_empty {
      font-size: 30px;
      font-weight: 900;
      text-align: center;
      padding-top: 40px;
      color: #c5d8e7;
    }
  }
</style>
