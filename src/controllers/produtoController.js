import mongoose from 'mongoose';
import Produto from '../models/Produto.js';
export async function criar(req, res) {
  const produto = await Produto.create(req.body);
  res.status(201).json(produto);
}
export async function listar(req, res) {
  const produtos = await Produto.find()
    .sort({ createdAt: -1 });
  res.json(produtos);
}
export async function buscar(req, res) {
  const produto = await Produto.findById(req.params.id);
  if (!produto) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }
  res.json(produto);
}
export async function atualizar(req, res) {
  const produto = await Produto.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, runValidators: true }
  );
  if (!produto) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }
  res.json(produto);
}
export async function remover(req, res) {
  const produto = await Produto.findByIdAndDelete(
    req.params.id
  );
  if (!produto) {
    return res.status(404).json({
      erro: 'Produto não encontrado'
    });
  }
  res.status(204).send();
}
export function validarId(req, res, next) {
  const valido = mongoose.isObjectIdOrHexString(
    req.params.id
  );
  if (!valido) {
    return res.status(400).json({ erro: 'ID inválido' });
  }
  next();
}