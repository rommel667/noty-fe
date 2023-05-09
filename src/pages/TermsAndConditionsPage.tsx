import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface TermsAndConditionsPageProps {

}

const TermsAndConditionsPage: FC<TermsAndConditionsPageProps> = ({ }) => {

    const navigate = useNavigate()

    return (
        <div className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300'>
            <div className="container mx-auto py-10 px-5 md:px-20 lg:px-40 text-justify">
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
                    <p onClick={() => navigate('/auth/signup')} className='text-blue-700 cursor-pointer underline'>Back to Registration Page</p>
                </div>

                <p className="mb-4">Please read these terms and conditions carefully before using our <span className="font-bold">BrainDump App</span>. These Terms govern your use of the App, its features, and any associated services provided by us. By using the App, you agree to be bound by these Terms.</p>

                <ol className="list-decimal list-item ml-4 mb-6">
                    <li className="mb-2">
                        <h2 className="text-xl font-bold">Acceptance of Terms</h2>
                        <p>By accessing and using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using the App.</p>
                    </li>

                    <li className="mb-2">
                        <h2 className="text-xl font-bold">License and Intellectual Property</h2>
                        <ol className="list-disc list-item ml-4">
                            <li className="mb-2">
                                <h3 className="text-lg font-bold">License</h3>
                                <p>We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal and non-commercial purposes, subject to these Terms.</p>
                            </li>
                            <li className="mb-2">
                                <h3 className="text-lg font-bold">Intellectual Property</h3>
                                <p>All intellectual property rights in the App, including but not limited to copyrights, trademarks, logos, and any other proprietary materials, belong to us or our licensors. You agree not to infringe upon or use our intellectual property without our prior written consent.</p>
                            </li>
                        </ol>
                    </li>

                    <li className="mb-2">
                        <h2 className="text-xl font-bold">User Obligations</h2>
                        <ol className="list-disc list-item ml-4">
                            <li className="mb-2">
                                <h3 className="text-lg font-bold">Registration</h3>
                                <p>You may need to create an account to access certain features of the App. You agree to provide accurate and up-to-date information during the registration process.</p>
                            </li>
                            <li className="mb-2">
                                <h3 className="text-lg font-bold">Responsible Use</h3>
                                <p>You agree to use the App responsibly and in compliance with applicable laws and regulations. You will not use the App for any illegal, unauthorized, or unethical purposes.</p>
                            </li>
                            <li className="mb-2">
                                <h3 className="text-lg font-bold">Security</h3>
                                <p>You are responsible for maintaining the confidentiality of your account credentials and ensuring their proper use. Any activities occurring under your account are your sole responsibility.</p>
                            </li>
                            <li className="mb-2">
                                <h3 className="text-lg font-bold">Prohibited Actions</h3>
                                <p>You shall not engage in any actions that may disrupt or interfere with the functioning of the App, its servers, or networks. This includes but is not limited to hacking, introducing malware, or attempting unauthorized access.</p>
                            </li>
                        </ol>
                    </li>

                    <li className="mb-2">
                        <h2 className="text-xl font-bold">Privacy</h2>
                        <p>Your privacy is important to us. Our Privacy Policy governs the collection, use, and disclosure of personal information you provide to us. By using the App, you consent to our collection and use of your personal information as outlined in the Privacy Policy.</p>
                    </li>

                    <li className="mb-2">
                        <h2 className="text-xl font-bold">Disclaimer of Warranty</h2>
                        <p>The App is provided on an "as is" and "as available" basis, without any warranties or representations, express or implied. We do not guarantee that the App will be error-free, secure, or uninterrupted. You use the App at your own risk.</p>
                    </li>

                    <li className="mb-2">
                        <h2 className="text-xl font-bold">Limitation of Liability</h2>
                        <p>To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising out of or in connection with the use of the App. This includes but is not limited to damages for loss of profits, data, or other intangible losses.</p>
                    </li>


                    <li className="mb-2">
                        <h2 className="text-xl font-bold">Modifications and Termination</h2>
                        <ol className="list-disc list-item ml-4">
                            <li className="mb-2">
                                <h3 className="text-lg font-bold">Modifications</h3>
                                <p>We reserve the right to modify or discontinue the App, its features, or these Terms at any time, without prior notice. It is your responsibility to review these Terms periodically for any updates.</p>
                            </li>
                            <li className="mb-2">
                                <h3 className="text-lg font-bold">Termination</h3>
                                <p>We may terminate your access to the App, temporarily or permanently, if we believe you have violated these Terms or engaged in any prohibited activities.</p>
                            </li>

                        </ol>
                    </li>


                    <li className="mb-2">
                        <h2 className="text-xl font-bold">Governing Law and Dispute Resolution</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].</p>
                    </li>

                    <li className="mb-2">
                        <h2 className="text-xl font-bold">Severability</h2>
                        <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.</p>
                    </li>

                    <li className="mb-2">
                        <h2 className="text-xl font-bold">Entire Agreement</h2>
                        <p>These Terms constitute the entire agreement between you and us regarding the use of the App, superseding any prior agreements or understandings.</p>
                    </li>
                </ol>

                <p>If you have any questions or concerns regarding these Terms, please contact us at <span className='text-blue-600 cursor-pointer'>brain-dump@gmail.com</span>.</p>
            </div>
        </div>
    )
}

export default TermsAndConditionsPage