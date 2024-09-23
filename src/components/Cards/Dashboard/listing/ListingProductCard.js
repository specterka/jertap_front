import { ListingEditButton, ListingDelete } from "@/assets/svgs";

const ProductCard = ({
  sr,
  name,
  address,
  description,
  photo1,
  photo2,
  onDelete,
}) => {
  return (
    <tr>
      <td>{sr}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{description}</td>
      <td>
        <div className="food-img">
          <figure>
            <img src={photo1} alt="food-img1" />
          </figure>
          <figure>
            <img src={photo2} alt="food-img2" />
          </figure>
        </div>
      </td>
      <td>
        <span>
          <ListingEditButton />
        </span>
        <small onClick={onDelete}>
          <ListingDelete />
        </small>
      </td>
    </tr>
  );
};

export default ProductCard;
