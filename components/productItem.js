
import Link from 'next/link';
import {
  FaCartArrowDown,
  FaCartPlus,
  FaRegHeart,
  FaHeart,
} from 'react-icons/fa';
import StarRatings from 'react-star-ratings';
import { toggleCart, toggleWishlist } from '../utils/toggleProductStates';


export default function ProductSection({ id, name, rating, img_url, price }) {
  

  return (
    <article>
      

      <div className="product-img-box">
        <Link href={`/product/${id}`}>
          <img className="product-img" src={img_url} />
        </Link>
      </div>

      <Link href={`/product/${id}`}>
        <a className="product-name">{name}</a>
      </Link>

      

      <div className="price">
        <p className="price-value">UAN{" "+price}</p>
        
      </div>

      <style jsx>{`
        article {
          
          display: flex;
          align-items: center;
          flex-direction: column;
          box-sizing: border-box;
          height: 100%;
          padding: 24px;
          background: white;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          border-radius: 6px;
        }
        .top-buttons {
          margin-bottom: 24px;
          align-self: flex-end;
        }
        .top-buttons .add-wishlist {
          background: none;
          border: none;
        }
        .top-buttons .add-wishlist:focus {
          outline: none;
        }
        .product-img-box {
          cursor: pointer;
          margin-bottom: 28px;
        }
        .product-img {
          width: 225px;
          height: 160px;
          object-fit: contain;
        }
        .product-name {
          width: 80%;
          line-height: 20px;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          text-align: center;
          color: #666666;
          margin-bottom: 18px;
        }
        .product-name:hover {
          text-decoration: underline;
          font-weight: 600;
        }
        .rating {
          margin-bottom: 24px;
        }
        .price {
          display: flex;
          align-items: center;
          font-weight: 900;
          font-size: 16px;
          color: #666666;
        }
        .price .add-cart {
          background: none;
          border: none;
          margin-left: 5px;
        }
        .price .add-cart:focus {
          outline: none;
        }
      `}</style>
    </article>
  );
}
