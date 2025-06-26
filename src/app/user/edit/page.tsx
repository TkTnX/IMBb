import { Metadata } from "next"

import { EditUserForm, UserPageTop } from "@/components/widgets"

export const metadata: Metadata = {
	title: "Edit Profile"
}

const UserEditPage = () => {
	return (
		<section>
			<UserPageTop
				title='Edit profile'
				desc='You can update your profile information here.'
            />
            <EditUserForm />
		</section>
	)
}

export default UserEditPage
