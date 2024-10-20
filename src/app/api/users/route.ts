import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data: users, error } = await supabase.from('users').select('*');

    if (error) {
      throw error;
    }

    return NextResponse.json(users, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Erro ao obter os usuários' }, { status: 500 });
  }
}
