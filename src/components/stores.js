import { writable } from "svelte/store";

const getInitialWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  if (wishlist) return JSON.parse(wishlist);
  return [];
};

export const wishes = writable(getInitialWishlist());
