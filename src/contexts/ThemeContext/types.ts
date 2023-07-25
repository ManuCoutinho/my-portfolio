export type Action = {
	type: string
}

export interface ThemeContextType {
	toggleTheme: React.Dispatch<Action>
}
