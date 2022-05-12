// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// @mui material components
import Grid from "@mui/material/Grid";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import { Col, Row, Container } from "react-bootstrap";

export default function AddDocument() {
  return (
    <DashboardLayout>
      <DashboardNavbar light />
      <Container>
        <Row>
          <Row>
            <Col>
              <Grid container>
                <Col>
                  <MDBox py={2}>
                    <MDInput type="text" label="For" name="for_data" fullWidth />
                  </MDBox>
                  <MDBox py={2}>
                    <MDInput type="text" label="From" name="from_data" fullWidth />
                  </MDBox>
                  <MDBox py={2}>
                    <MDInput type="text" label="Purpose" name="purpose" fullWidth />
                  </MDBox>
                  <MDBox py={2}>
                    <MDInput type="text" label="Account Code" name="account_code" fullWidth />
                  </MDBox>
                  <MDBox py={2}>
                    <MDInput type="text" label="Project No." name="project_no" fullWidth />
                  </MDBox>
                </Col>
              </Grid>
            </Col>
            <Col>
              <Grid container>
                <Col>
                  <MDBox py={2}>
                    <MDInput type="text" label="Project Title" name="project_title" fullWidth />
                  </MDBox>
                  <MDBox py={2}>
                    <MDInput type="text" label="PR No." name="pr_no" fullWidth />
                  </MDBox>
                  <MDBox py={2}>
                    <MDInput //sir henry man gud sir
                      type="date"
                      label="Date Posted"
                      name="date"
                      onFocus="(type='date')"
                      onBlur="if(!value)this.type='text'"
                      fullWidth
                    />
                  </MDBox>
                  <MDBox py={2}>
                    <MDInput type="text" label="RL No." name="rl_no" fullWidth />
                  </MDBox>
                  <MDBox py={2}>
                    <MDInput type="text" label="Remarks" name="remarks" fullWidth />
                  </MDBox>
                </Col>
              </Grid>
            </Col>
          </Row>
        </Row>
      </Container>
      <Grid container>
        <Grid item xs={5} spacing={5} pl={2}>
          <MDButton pl={5} color="info" variant="contained" size="small">
            <Icon fontSize="medium">save</Icon>
            <MDTypography px={1} py={1} variant="h7" color="white">
              Save
            </MDTypography>
          </MDButton>
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}
