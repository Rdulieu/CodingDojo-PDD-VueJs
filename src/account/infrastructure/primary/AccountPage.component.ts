import { defineComponent } from 'vue';
import { Account, AccountType } from '../../domain/models/Account';
import { Transaction, TransactionType } from '../../domain/models/Transaction';

export default defineComponent({
  name: 'AccountPage',
  data() {
    return {
      accounts: [
        Account.create('1', AccountType.COURANT, 'Compte courant', 5756),
        Account.create('2', AccountType.EPARGNE, 'Compte épargne', 5756),
      ],
      transactions: [
        Transaction.create(
          '1',
          'Cloth&Co',
          '#12548796',
          TransactionType.SHOPPING,
          'Compte courant',
          new Date('2025-03-28'),
          -2500,
        ),
        Transaction.create(
          '2',
          'Freepik Sales',
          '#12548796',
          TransactionType.VIREMENT,
          'Compte courant',
          new Date('2025-02-25'),
          750,
        ),
        Transaction.create(
          '3',
          'Mobile Service',
          '#12548796',
          TransactionType.SERVICE,
          'Compte courant',
          new Date('2025-01-20'),
          -150,
        ),
        Transaction.create(
          '4',
          'Wilson',
          '#12548796',
          TransactionType.VIREMENT,
          'Compte courant',
          new Date('2025-01-15'),
          -1050,
        ),
        Transaction.create(
          '5',
          'Emilly',
          '#12548796',
          TransactionType.VIREMENT,
          'Compte courant',
          new Date('2025-01-14'),
          840,
        ),
        Transaction.create(
          '6',
          'Emilly',
          '#12548796',
          TransactionType.VIREMENT,
          'Compte épargne',
          new Date('2025-01-14'),
          840,
        ),
      ],
    };
  },
  computed: {
    accountCourant() {
      return this.accounts.find((account) => account.isCourant());
    },
    accountEpargne() {
      return this.accounts.find((account) => account.isEpargne());
    },
  },
});
