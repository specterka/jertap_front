import ConfirmationDialog from "@/components/shared/ConfirmationDialog";
import { Accordion } from "react-bootstrap";
import { DeleteIconQAPage } from "@/assets/svgs";
import Link from "next/link";

const QAListItem = ({ qaItem, onDeleteInitiate, index, isActive }) => {
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header className={isActive ? "active" : ""}>
        {index + 1}. {`${qaItem?.question}`}
      </Accordion.Header>
      <div className="delete-button">
        <Link href="#" onClick={() => onDeleteInitiate(qaItem.id)}>
          <DeleteIconQAPage />
        </Link>
      </div>
      <Accordion.Body>{qaItem?.answer}</Accordion.Body>
    </Accordion.Item>
  );
};

export default QAListItem;
