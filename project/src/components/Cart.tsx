import React, { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  displayCart,
  removeProductFromCart,
} from "../features/user/cart.slice";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import CartItem from "./CartItem";

type Props = {};

const Cart = (props: Props) => {
  const isDisplayCart = useSelector((state: RootState) => state.cart.isDisplay);
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  console.log(cartProducts);
  const cartClassName = isDisplayCart ? "" : "hidden";
  // const [total, setTotal] = useState<number>(0);
  // let price = 0;
  // useEffect(() => {
  //   cartProducts?.map((item) => {
  //     price += item.price * item.quantity!;
  //   });
  //   setTotal(price);
  // }, [cartProducts]);
  const dispatch = useDispatch();
  return (
    <div className={cartClassName + " "} id="cart">
      <section className="z-20 relative">
        <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 absolute bg-slate-50 right-10 top-32 opacity-100 rounded-2xl">
          <div className="flex flex-row-reverse">
            <button onClick={() => dispatch(displayCart())}>
              <HiOutlineChevronDoubleRight />
            </button>
          </div>
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-xl">
                <Link to={"cart"}>Your Cart</Link>
              </h1>
            </header>
            <div className="mt-8">
              {cartProducts?.map((item, index) => {
                return <CartItem item={item} />;
              })}

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  {/* <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>{formatCurrency(total)} VND</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>{formatCurrency(total * 0.1)} VND</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>{formatCurrency(total * 0.09)} VND</dd>
                    </div>
                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>
                        {formatCurrency(total + total * 0.1 - total * 0.09)} VND
                      </dd>
                    </div>
                  </dl> */}
                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>
                      <p className="whitespace-nowrap text-xs">
                        2 Discounts Applied
                      </p>
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block rounded bg-[#EE3131] px-5 py-3 text-sm text-gray-100 transition hover:bg-red-500"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
