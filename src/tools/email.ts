import axios from 'axios'
import { IFormData } from './form'

export const EMAIL_API = axios.create({
	baseURL: 'https://api-v2.notice.studio/email',
})

export const generateEmailTemplate = (formData: IFormData, post: string) => {
	const { firstName, lastName, email, phoneNumber, message } = formData

	return `
    <!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

    <head>
        <title>Notice Application From</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
        <style>
            * {
                box-sizing: border-box;
            }

            body {
                margin: 0;
                padding: 0;
            }

            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }

            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }

            p {
                line-height: inherit
            }

            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }

            .image_block img+div {
                display: none;
            }

            @media (max-width:670px) {

                .desktop_hide table.icons-inner,
                .social_block.desktop_hide .social-table {
                    display: inline-block !important;
                }

                .icons-inner {
                    text-align: center;
                }

                .icons-inner td {
                    margin: 0 auto;
                }

                .mobile_hide {
                    display: none;
                }

                .row-content {
                    width: 100% !important;
                }

                .stack .column {
                    width: 100%;
                    display: block;
                }

                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }

                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
            }
        </style>
    </head>

    <body class="body" style="background-color: #F6F6F6; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F6F6F6;">
            <tbody>
                <tr>
                    <td>
                        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fdf2db;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
                                                        <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                                        <div class style="font-size: 12px; font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #4f648b; line-height: 1.2;">
                                                                            <p style="margin: 0; text-align: center; font-size: 12px; mso-line-height-alt: 14.399999999999999px;"><span style="font-size:50px;"><sub><span style>Hello There 👋</span></sub></span></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <div class="spacer_block block-3" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F6F6F6;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; color: #000000; width: 650px; margin: 0 auto;" width="650">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 30px; padding-left: 30px; padding-right: 30px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                    <div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;line-height:150%;text-align:center;mso-line-height-alt:24px;">
                                                                        <p style="margin: 0; word-break: break-word;"><strong>You received this email because you created a job board using Notice.This is from the  <em style="color: #ffb744;">post ${post}.</em> </strong></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F6F6F6;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FDF3DC; color: #000000; width: 650px; margin: 0 auto;" width="650">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 30px; padding-right: 30px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                        <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                    <div style="color:#4f648b;font-family:'Trebuchet MS','Lucida Grande','Lucida Sans Unicode','Lucida Sans',Tahoma,sans-serif;font-size:24px;line-height:120%;text-align:center;mso-line-height-alt:28.799999999999997px;">
                                                                        <p style="margin: 0; word-break: break-word;"><span><span><strong>Applicant </strong>info</span><sub>+</sub></span></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FDF3DC; color: #333; width: 650px; margin: 0 auto;" width="650">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-left: 6px solid #ffb744; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px;">
                                                        <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                    <div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:18px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
                                                                        <p style="margin: 0; word-break: break-word;"><em><strong><span>First Name :&nbsp; ${firstName}</span></strong></em></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                    <div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:18px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
                                                                        <p style="margin: 0; word-break: break-word;"><em><strong><span>Last Name :&nbsp; ${lastName}</span></strong></em></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                    <div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:18px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
                                                                        <p style="margin: 0; word-break: break-word;"><em><strong><span>E-Mail :&nbsp; ${email}</span></strong></em></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                    <div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:18px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
                                                                        <p style="margin: 0; word-break: break-word;"><em><strong><span>Phone Number:&nbsp;${phoneNumber}</span></strong></em></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FDF3DC; color: #333; width: 650px; margin: 0 auto;" width="650">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-left: 6px solid #ffb744; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px;">
                                                        <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                    <div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:18px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
                                                                        <p style="margin: 0; word-break: break-word;"><span><strong><em>Message :&nbsp;</em></strong></span></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;">
                                                                    <div style="color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
                                                                        <p style="margin: 0; word-break: break-word;"> ${
																																					message !== ''
																																						? message
																																						: 'No Message left by the applicant.'
																																				}</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F6F6F6;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FDF3DC; color: #000000; width: 650px; margin: 0 auto;" width="650">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 30px; padding-right: 30px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;">&#8202;</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #555555;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #555555;">
                            <tbody>
                                <tr>
                                    <td>
                                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
                                    <tbody>
                                        <tr>
                                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                    <tr>
                                                        <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                                            <div style="color:#FFFFFF;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:35px;line-height:120%;text-align:center;mso-line-height-alt:42px;">
                                                                <p style="margin: 0;">&nbsp; &nbsp; &nbsp;From Notice</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                    <tr>
                                                        <td class="pad" style="padding-left:25px;padding-right:30px;padding-top:10px;">
                                                            <div style="color:#FFFFFF;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:13px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
                                                                <p style="margin: 0; word-break: break-word;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;One Place to create & publish All Web Content.</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table class="social_block block-3" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin-left: 36px;">
                                                    <tr>
                                                        <td class="pad">
                                                            <div class="alignment" align="center">
                                                                <table class="social-table" width="188px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                                    <tr class="alignment" align="center">
                                                                        <td style="padding:0 15px 0 0px;"><a href="https://www.notice.studio/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/website@2x.png" width="32" height="auto" alt="Web Site" title="Web Site" style="display: block; height: auto; border: 0;"></a></td>
                                                                        <td style="padding:0 15px 0 0px;"><a href="https://www.linkedin.com/company/noticestudio/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/linkedin@2x.png" width="32" height="auto" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td>
                                                                        <td style="padding:0 15px 0 0px;"><a href="https://www.youtube.com/channel/UCjplZkfyVJKV6wkRKWUWILw" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/youtube@2x.png" width="32" height="auto" alt="YouTube" title="YouTube" style="display: block; height: auto; border: 0;"></a></td>
                                                                        <td style="padding:0 15px 0 0px;"><a href="https://x.com/i/flow/login?redirect_after_login=%2Fintent%2Ffollow" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/twitter@2x.png" width="32" height="auto" alt="X" title="X" style="display: block; height: auto; border: 0;"></a></td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 25px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;">
                                                                    <div style="font-family: sans-serif">
                                                                        <div class style="font-size: 12px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                                                            <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 18px;">&nbsp;<br><span style="font-size:12px;">©2024 Notice. All Rights Reserved&nbsp;</span></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table><!-- End -->
    </body>

    </html>

    `
}
