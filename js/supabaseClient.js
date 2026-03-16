// Substitua com as suas credenciais do painel do Supabase (Project Settings > API)
const SUPABASE_URL = 'https://yfhnszjcuhmypgcgyxdi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmaG5zempjdWhteXBnY2d5eGRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MzkzNzUsImV4cCI6MjA4OTIxNTM3NX0.X-wA2UplJpBI-C1DWI0LW_u9BI7CmM1AZ5ekwV9bYaU';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export { _supabase as supabase };
