// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// @mui material components
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

export default function AddDocument() {
  return (
    <DashboardLayout>
      <DashboardNavbar light />

      <Grid container>
        <Grid item xs={5} spacing={5}>
          <MDBox py={2}>
            <MDInput type="text" label="Account Code" name="pr_no" fullWidth />
          </MDBox>
          <MDBox py={2}>
            <MDInput type="text" label="Purpose" name="pr_no" fullWidth />
          </MDBox>
          <MDBox py={2}>
            <MDInput type="text" label="PR No." name="pr_no" fullWidth />
          </MDBox>
          <MDBox py={2}>
            <MDInput type="text" label="Project Title" name="project_title" fullWidth />
          </MDBox>
          <MDBox py={2}>
            <MDInput type="date" label="Date Posted" name="project_title" fullWidth />
          </MDBox>
          <MDBox py={2}>
            <MDInput type="text" label="Requestor" name="project_title" fullWidth />
          </MDBox>
          <MDBox py={2}>
            <MDInput type="text" label="For" name="project_title" fullWidth />
          </MDBox>
          <MDBox py={2}>
            <MDInput type="text" label="From" name="project_title" fullWidth />
          </MDBox>
          <MDBox py={2}>
            <MDInput type="text" label="RL No." name="status" fullWidth />
          </MDBox>
          <MDButton color="info" variant="contained" size="small">
            <Icon fontSize="small">save</Icon>
            <MDTypography px={1} py={1} variant="h7" color="white">
              Save
            </MDTypography>
          </MDButton>
        </Grid>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}
