
export default function ProfileContent({ user }: { user: object}) {
    return (
        <div>Hello {user.firstName} {user.middleName} {user.lastName}</div>
    )
}