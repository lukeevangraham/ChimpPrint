import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import axios from "axios";

const SelectCampaigns = ({ campaigns, changeCampaigns, setArticles }) => {
  const selectContent = async (e) => {
    e.preventDefault();

    const campaignsToGet = campaigns.filter((c) => c.selected);

    const response = await axios.post(`/chimpScrape/chimpPullContent`, {
      issues: campaignsToGet,
    });

    console.log("RES: ", response.data.articles);
    setArticles(response.data.articles);

    return response;
  };

  const handleToggle = (index) => {
    if (campaigns.length > 0) {
      // console.log("VAL: ", campaigns[index].selected);
      const newCampaigns = campaigns.map((c) =>
        c.url === index ? { ...c, selected: !c.selected } : c
      );

      changeCampaigns(newCampaigns);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={selectContent}>
        Select Content
      </Button>
      <List>
        {campaigns.map((campaign, index) => (
          <ListItem key={campaign.url} disablePadding>
            <ListItemButton onClick={() => handleToggle(campaign.url)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={campaign.selected}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText>{campaign.headline}</ListItemText>
              <ListItemText edge="end">{campaign.date}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SelectCampaigns;
