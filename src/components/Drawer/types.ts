export type DrawerProps = {
	state: boolean
	children: React.ReactNode
}

export type ToggleProps = {
	open: boolean
	handleOpen: React.Dispatch<React.SetStateAction<boolean>>
}
