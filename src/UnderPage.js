
import React from "react";
import { useHistory } from 'react-router-dom'

function UnderPage (){
const history = useHistory();
	return(
		<div>
			<br /> <br />
			<img src="https://m.media-amazon.com/images/I/41CyuoxrPvL._AC_.jpg" alt="smily-pic" />
			<br /><br />
			<button className="btn btn-secondary"><a className="smiley" href="https://www.macys.com/s/toys-r-us/?cm_mmc=MSN_Bing_SH_Text_Tabletop-_-Toys_Brand_Toys_R_Us_Exact_Toys_Brand_ToysRUs_Exact-_-81363949196166-_-toys%20r%20us_be_c_kclickid_5c8c2a52-baca-40f4-99a6-9efa7ae2d909_KID_981_401614863_1301822092256390_81363949196166_kwd-81364056335362%3Aloc-190___c_KID_&trackingid=508x693488&m_sc=sem&m_sb=Bing&m_tp=Text&m_ac=MSN_Bing_SH_Text_Tabletop&m_ag=Toys_Brand_ToysRUs_Exact&m_cn=Toys_Brand_Toys_R_Us_Exact&m_pi=bi_cmp-401614863_adg-1301822092256390_ad-81363949196166_kwd-81364056335362%3Aloc-190_dev-c_ext-_prd-&msclkid=76fc680df5e115abded8096d7bc43774">Click here</a></button>
		</div>
	);
}

export default UnderPage;