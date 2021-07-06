import Link from 'next/link'

function Menu() {
    return <div>
        <table>
            <tbody>
                <tr>
                    <td>
                        <Link href="/">
                            <a>Index</a>
                        </Link>
                    </td>
                    <td>
                        <Link href="/converter">
                            <a>Converter</a>
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Menu