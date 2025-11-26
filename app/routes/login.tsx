import { useState, type FormEventHandler } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import type { Route } from './+types/login';
import { getFormData } from '../helpers/getFormData';

export function meta(_args: Route.MetaArgs): Array<{ title?: string; name?: string; content?: string }> {
    return [
        { title: 'Login | Portal' },
        { name: 'description', content: 'Login to your account' },
    ];
}

interface LoginFormData {
    email: string;
    password: string;
}

export default function Login(): React.ReactElement {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        const data = getFormData(e.target);
        console.log(data);
        setError('');
        setIsLoading(true);

        try {
            await login(data.email, data.password);
            navigate('/dashboard');
        } catch {
            setError('Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <nav>
                <ul>
                    <li><a href="#" className="secondary">...</a></li>
                </ul>
                <ul>
                    <li><strong>D&D Beyond Companion</strong></li>
                </ul>
                <ul>
                    <li><a href="#" className="secondary">...</a></li>
                </ul>
            </nav>
            <main className="flex">
                <article className='mx-auto max-w-[600px]'>
                    <form className='flex flex-col w-full max-w-[650px] mx-auto text-left' onSubmit={handleSubmit}>
                        <label htmlFor="fname">First name:</label>
                        <input type="text" id="fname" name="fname" value="John" />
                        <label htmlFor="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" value="Doe" />
                        <input type="submit" value="Submit" />
                    </form>
                </article>
            </main>
        </>
    );
}

