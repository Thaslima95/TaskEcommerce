import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function MUICheckbox({ price }) {
  const [navi, setNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const labelId = `checkbox-list-label-${price}`;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (price) => (e) => {
    e.preventDefault();
    console.log(price);
    const currentIndex = checked.indexOf(price);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(price);
      setNav(true);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    // navigate.push({
    //   pathname: "/filter",
    //   state: { checked },
    // });
    // navigate(`/filter?value=${newChecked}`);
  };

  console.log(checked);
  const str = String(checked);

  return (
    <>
      {navi && (
        <Navigate
          to={`${location}?val=${checked[0]}&${checked[1]}`}
          state={{ checked: checked }}
        />
      )}
      {/* {checked.length != 0
        ? checked.map((e) =>
            categories
              .filter((p) => p.price == e)
              .map((e) => {
                return (
                  <>
                    <h2
                      style={{
                        top: "20px",
                        left: "20px",
                        position: "relative",
                      }}
                    >
                      {e.price}{" "}
                      <button onClick={handleToggle(e.price)}>Remove</button>
                    </h2>
                    <h1>{e.price}</h1>
                  </>
                );
              })
          )
        : categories.map((e) => <h1>{e.price}</h1>)} */}

      <ListItem key={price}>
        <ListItemButton role={undefined} onClick={handleToggle(price)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.indexOf(price) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": labelId }}
            />
          </ListItemIcon>

          <ListItemText id={labelId} primary={`${price}`} />
        </ListItemButton>
      </ListItem>
    </>
  );
}
